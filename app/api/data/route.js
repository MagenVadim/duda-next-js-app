
export async function GET(request){
    const data = {
        name:'Federiko',
        age: 30,
        city: 'Turin'
    }
    return new Response(JSON.stringify(data));
}


export async function POST(request){
    return new Response(request.body);
}