import { Attempt } from "@/types/Attempt";
import { Problem } from "@/types/Problem";
import axios from "axios"
import http from "@/services/http-common";
import { addTestCaseAsync } from "./testcase-service";

const api = "https://contester.azurewebsites.net/";

export async function getProblemsAsync(): Promise<Array<Problem>> {
  return (await axios.get<Array<Problem>>(api + "problems/all")).data    
}


export async function getProblemAttemptsAsync(id:number): Promise<Array<Attempt>> {
    return (await axios.get<Array<Attempt>>(api + "attempts/all")).data    
  }

export async function getProblemAsync(id: number): Promise<Problem> {
  return (await axios.get<Problem>(api + "problems/" + id)).data
}




export async function addProblemAsync(problem: Problem) {

    var id = (await axios.post(api + "problems", {
            "title": problem.title,
            "body": problem.body,
            "inputDescription": problem.inputDescription,
            "outputDescription": problem.outputDescription,
            "note": problem.note,
            "tags": problem.tags
    })).data;

    if(problem.testcases.length > 0){
        console.log("Adding tests");
        addTestCaseAsync(problem.testcases, id);
        console.log("Ending add tests");
    }
}

export async function sendAttemptAsync(attempt: Attempt) {
  http.post<Attempt>("attempts", attempt)
}
