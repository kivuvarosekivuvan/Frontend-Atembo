import { BASE_URL } from "@/config";

export async function GET(){
    try{
        if(!BASE_URL){
            return new Response('BASE url not found' ,{
                status : 404,
                statusText:'failed'
            })
        }

        const response= await fetch (`${BASE_URL}/Temperature/`)
        const result = await response.json();
        return new Response(JSON.stringify(result),{
            status:200,
            statusText:"success"
        })

    }
    catch(error:any){
        return new Response(error .message,{
            status :500,
            statusText:"failed"
        })
        
    }
}