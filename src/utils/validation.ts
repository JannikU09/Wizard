export const validation = {

    isNumeric(value: string): boolean {
        return !isNaN(parseInt(value));
    }
}