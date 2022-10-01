const http = require('http');
const rupiah = require('rupiah-format');
const fs = require ('fs')
const os = require ('os');
const { cpuUsage } = require('process');
const host = `127.0.0.1`;
const port = 3002



const server = http.createServer(function(request, response){
    let uang = 50000;
    let jajan = 30000;
    let sisa = uang - jajan;
    
    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);
    

    fs.appendFile('result money.txt', sisa, () =>{
        console.log('money in database')
    })

    const RAM = os.freemem();
    const CPU = os.cpus();


     function checkCPU(){
        let myCPU = [];
        CPU.map((cpu, i) => {
            myCPU.push(cpu.model)
        })
        return myCPU
     }
     console.log(checkCPU())


    const hasil = `my input${uang},my output${jajan}, results${sisa}, RAM ${RAM}`;
    
    response.end(hasil);
});



server.listen(port, host, '', function(){
    console.log(`server menyala di... ${host}:${port}`)
});