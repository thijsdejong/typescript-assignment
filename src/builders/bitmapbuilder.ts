import { Bitmap } from "../models/bitmap";
import { Pixel } from "../models/pixel";

export class BitmapBuilder {

    private _width: number = 0;
    private _height: number = 0;
    private _data: Pixel[][] = [];

    public getWidth(): number {
        return this._width;
    }

    public setWidth(width: number): BitmapBuilder {
        this._width = width;

        return this;
    }

    public getHeight(): number {
        return this._height;
    }

    public setHeight(height: number): BitmapBuilder {
        this._height = height;

        return this;
    }

    public getData(): Pixel[][] {
        return this._data;
    }

    public setData(data: Pixel[][]): BitmapBuilder {
        this._data = data;

        return this;
    }

    public build(): Bitmap {
        return new Bitmap(this);
    }
}
