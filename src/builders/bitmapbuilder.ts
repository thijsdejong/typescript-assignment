import { Pixel } from "../models/pixel";

export class BitmapBuilder {

    private _width: number = 0;
    private _height: number = 0;
    private _data: Pixel[][] = [];

    public getWidth(): number {
        return this._width;
    }

    public setWidth(width: number): void {
        this._width = width;
    }

    public getHeight(): number {
        return this._height;
    }

    public setHeight(height: number): void {
        this._height = height;
    }

    public getData(): Pixel[][] {
        return this._data;
    }

    public setData(data: Pixel[][]): void {
        this._data = data;
    }

    public build(): BitmapBuilder {
        return this;
    }
}
