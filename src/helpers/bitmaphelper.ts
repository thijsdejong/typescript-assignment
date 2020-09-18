import { Bitmap } from "../models/bitmap"
import { Pixel } from "../models/pixel"

export class BitmapHelper {
    
    public static createDistanceBitmapFromPixelBitmap(bitmap: Bitmap): Bitmap {
        let data: Pixel[][] = [];

        for (let y = 0; y < bitmap.getHeight(); y++) {
            let row: Pixel[] = [];

            for (let x = 0; x < bitmap.getWidth(); x++) {
                let pixel = bitmap.getPixel(x, y);
                let newPixel = new Pixel(pixel.getState());

                newPixel.setDistance(this.getDistanceToClosestWhitePixelByBitmapAndPixel(bitmap, x, y));

                if (pixel.isWhite()) {
                    newPixel.setDistance(0);
                }

                row.push(newPixel);                
            }

            data.push(row);
        }

        return new Bitmap(bitmap.getWidth(), bitmap.getHeight(), data);
    }

    private static getDistanceToClosestWhitePixelByBitmapAndPixel(bitmap: Bitmap, pixelX: number, pixelY: number): number {
        let distance: number = Number.MAX_SAFE_INTEGER;

        for (let targetY = 0; targetY < bitmap.getHeight(); targetY++) {
            for (let targetX = 0; targetX < bitmap.getWidth(); targetX++) {
                let target = bitmap.getPixel(targetX, targetY);
                
                if (target.isBlack() || (pixelX === targetX && pixelY === targetY)) {
                    continue;
                }

                distance = Math.min(distance, this.calculateDistance(targetX, pixelX, targetY, pixelY));
            }
        }

        return distance;
    }

    private static calculateDistance(x1: number, x2: number, y1: number, y2: number): number {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
}
