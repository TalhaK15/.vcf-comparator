const path = require('path');
const fs = require('fs')

let markers = [];
let vcfDosyalari = [];
let hatali = [];

for (i = 1; i < 50; i++) {
    if(!fs.existsSync('./base/base file (' + i + ').vcf')) {}
    else {
        markers[i] = fs.readFileSync('./base/base file (' + i + ').vcf', 'utf-8')
    }   
}



  for (z=1; z < 17; z++) {
        for (x = z+1; x < 17; x++) {     
            if (markers[z] === markers[x]) {
                console.log(`basefile${z} and basefile${x} is same!`)
                hatali[x] = x  
            }
        }
    }

var hatalilar = hatali.filter(function (el) {
  return el != null;
});

console.log(hatalilar + '\n' + hatalilar.length);


for (k=0;k < 50;k++) {
       let sild = hatalilar[k]
       fs.unlink(`./base/base file (${sild}).vcf`, function (err) {
           if (err) return;
           else console.log(`"base file (${sild}).vcf" deleted successfully!`);
       });  
    }












for(f=1;f<50;f++) {
       if(!fs.existsSync('./base/base file (' + f + ').vcf')) {}
       else {
           vcfDosyalari[f] = fs.readFileSync('./base/base file (' + f + ').vcf', 'utf-8').toString().trim().split("\r\n")
           console.log('Successfull!')
       }   
    }


var vcfMultiple = vcfDosyalari.filter(function (el) {
        return el != null;
    });
    
    let vcfSingle = vcfMultiple[0].concat(vcfMultiple[1]);
    let vcfHazir = [...new Set(vcfSingle)];

    console.log(vcfSingle);
    console.log(vcfHazir);

let vcfHazir1 = vcfHazir.filter(function (zel) {
  return zel != 'END:VCARD';
});


let vcfHazir2 = vcfHazir1.filter(function (zel) {
  return zel != 'BEGIN:VCARD';
});


let vcfCikti = vcfHazir2.join('\r\n');

fs.writeFile('SonKisi.vcf', 'BEGIN:VCARD\r\n' + vcfCikti + 'END:VCARD' ,function (err) {
    if (err) throw err;1
    console.log('Your .vcf file is ready.');
});
