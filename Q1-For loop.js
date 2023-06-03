let json = [{
    'Name': 'Mohamed',
    'Designation': 'full stack developer',
    'Institute': 'Guvi',
    'Mail': 'bmrafik786@gmail.com'
},
{
    'Name': 'Mohamed',
    'Designation': 'full stack developer',
    'Institute': 'Guvi',
    'Mail': 'bmrafik786@gmail.com'
}]



for (let i=0; i<json.length; i++) {
    let obj = json[i];

    console.log(obj.Name);
}