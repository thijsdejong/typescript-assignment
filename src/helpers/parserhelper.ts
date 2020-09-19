export class ParserHelper {
    
    public static getNumberOfTestcases(input: string): number {
        let matches = input.match("^(?<numberOfTestCases\d)\n$");
        
        if (matches === null) {
            throw new Error("Unable to parse number of test cases.");
        }

        let numberOfTestCases = Number(matches?.groups?.numberOfTestCases);

        if (numberOfTestCases === NaN || numberOfTestCases < 1 && numberOfTestCases > 1000) {
            throw new Error("Invalid number of test cases.");
        }

        return numberOfTestCases;
    }

    public static getWidth(input: string): number {
        let width = Number(this.getHeightAndWidthMatches(input).groups?.width);

        if (width === NaN || width < 1 && width > 182) {
            throw new Error("Invalid width.");
        }

        return width;
    }

    public static getHeight(input: string): number {
        let height = Number(this.getHeightAndWidthMatches(input).groups?.height);

        if (height === NaN || height < 1 && height > 182) {
            throw new Error("Invalid height.");
        }

        return height;
    }

    private static getHeightAndWidthMatches(input: string): RegExpMatchArray {
        let matches = input.match("^(?<height>\d) (?<width>\d)\n$");

        if (matches === null) {
            throw new Error("Unable to parse height and width.");
        }

        return matches;
    }

    public static getPixelRow(input: string, width: number): string {
        let matches = input.match("^[01]{" + width + "}\n$");
        
        if (matches === null) {
            throw new Error("Unable to parse row of pixels.");
        }

        let pixelRow = matches.input;

        if (pixelRow === undefined) {
            throw new Error("Unable to parse row of pixels.");
        }

        return pixelRow;
    }
}
