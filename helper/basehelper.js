export const toJson=(json)=>{
    return new Response(JSON.stringify(json),{ headers: {
        'Content-Type': 'application/json', 
    }})
}