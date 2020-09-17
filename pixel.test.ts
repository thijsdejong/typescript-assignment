import { Pixel } from "./pixel"

describe('pixel tests', () => {
    const write = process.stdout.write;

    beforeAll(() => {
        process.stdout.write = jest.fn();
    });

    afterAll(() => {
        process.stdout.write = write;
    });

    test('print pixel state off', () => {
        let pixel = new Pixel(false);

        pixel.printstate();

        expect(process.stdout.write).toHaveBeenCalledWith("0");
    });

    test('print pixel state on', () => {
        let pixel = new Pixel(true);

        pixel.printstate();

        expect(process.stdout.write).toHaveBeenCalledWith("1");
    });
});
