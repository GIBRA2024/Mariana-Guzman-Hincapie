function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Mariana Guzmán Hincapié
TEL:+57 3126597001
EMAIL: mariana.guzman@eurobelleza.com
NOTE:Coordinadora de Análisis Comercial
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
