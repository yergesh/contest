import { TestCase } from './../types/TestCase';
import axios from "axios"
import VueAxios from "vue-axios"

const api = "https://contester.azurewebsites.net/";

export async function addTestCaseAsync(testcases:Array<TestCase>,id:Number) {
    for (var i = 0; i < testcases.length; i += 1){
        await axios.post(api + "TestCase", {
            "problemId": id,
            "input": testcases[i].input,
            "ExpectedOutput": testcases[i].output,
        });
    }
}
