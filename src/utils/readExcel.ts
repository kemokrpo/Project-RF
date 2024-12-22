import ExcelJS from 'exceljs';

interface ProjectData {
  sheetName: string;
  image: string | null;
  oblast: string;
  year: number;
  description: string;
}

export interface ExcelMediaType {
  type: string; // image, background
  name: string;
  extension: string;
  buffer: Buffer;
  index: string;
}

export const readExcelFile = async (filePath: string): Promise<ProjectData[]> => {
  const data: ProjectData[] = [];

  try {
    // Fetch the Excel file from the public folder
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Failed to fetch the Excel file.");
    }

    const arrayBuffer = await response.arrayBuffer();
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(arrayBuffer); // Load the Excel file

    // Get the first worksheet (you can change this if you want a different sheet)
    const worksheet = workbook.worksheets[0];

    // Loop through the images in the worksheet
    for (const image of worksheet.getImages()) {
      // Cast the workbook media to an unknown type and then assert it to ExcelMediaType[]
      const media = workbook.model.media as unknown as ExcelMediaType[];

      const img: ExcelMediaType | undefined = media.find((m) => m.index === image.imageId);

      if (img) {
        // Extract image in base64 format
        const imgBase64 = `data:image/${img.extension};base64,${img.buffer.toString('base64')}`;

        // Get other row data
        const rowIndex = image.range.tl.nativeRow; // Row index for image (1-indexed)
        const row = worksheet.getRow(rowIndex+1); // 1-indexed in ExcelJS
        const oblast = row.getCell(7)?.value as string; // Column G (Oblast)
        const year = row.getCell(6)?.value as number;   // Column F (Godina)
        const description = row.getCell(2)?.value as string; // Column B (Opis)

        data.push({
          sheetName: worksheet.name,
          image: imgBase64, // Store the image as base64
          oblast,
          year,
          description,
        });
      }
    }
  } catch (error) {
    console.error("Error loading Excel data:", error);
  }

  return data;
};
