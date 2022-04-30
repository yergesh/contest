import { ref } from "vue";
import { TestCase } from "./TestCase";

export class Problem {
    id?: number;
    title: string="";
    body: string="";
    inputDescription: string="";
    outputDescription: string="";
    rating: number|null=null;
    testcases: Array<TestCase>=Array<TestCase>();
    note?: string;
    tags: string="";


    delTestCase(idx){
        this.testcases.splice(idx,1);
    }
    addTestCase(){
        this.testcases.push(new TestCase());
    }
}
