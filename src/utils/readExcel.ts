import * as XLSX from "xlsx";

interface ProjectData {
  sheetName: string;
  image: string | null;
  oblast: string;
  year: number;
  description: string;
}

export const readExcelFile = (filePath: string): ProjectData[] => {
  const data: ProjectData[] = [];
  
  // Read the file synchronously
  const workbook = XLSX.readFile(filePath);

  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json<any>(sheet, { header: 1 });

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const image = row[7] ? row[7] : null; // Column H
      if (!image) continue;

      data.push({
        sheetName,
        image,
        oblast: row[6], // Column G
        year: row[5],   // Column F
        description: row[1], // Column B
      });
    }
  });

  return data;
};
