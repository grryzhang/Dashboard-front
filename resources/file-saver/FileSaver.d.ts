// Type definitions for FileSaver 

interface FileSaver {
	
	saveAs( data: any , filename: string, noAutoBOM?: boolean ): void;
}

declare var FileSaver:FileSaver;