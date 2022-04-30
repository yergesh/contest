export class Attempt {
    id?: number;
    userId?: number;
    problemId: number = 0;
    createDate?: Date;
    status?: number = 0;
    sourceCode: string = "";
}
