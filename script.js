// Set the business number in international digits once supplied by the owner.
const CONTACT = { whatsapp: '573103901449', instagram: 'https://www.instagram.com/origen_acabados/' };
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');
menuButton.addEventListener('click', () => {const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Abrir menú':'Cerrar menú');menu.hidden=open;});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');}));
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service-select').value=link.dataset.service;}));
const dialog=document.querySelector('#photo-dialog');
const dialogImg=dialog.querySelector('img');
document.querySelector('#open-photo').addEventListener('click',()=>{dialogImg.src='assets/cocina-origen.png';dialog.showModal();});
document.querySelectorAll('.portfolio-item').forEach(btn=>btn.addEventListener('click',()=>{dialogImg.src=btn.dataset.full;dialog.showModal();}));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
const form=document.querySelector('#inquiry-form');
if(CONTACT.whatsapp){form.querySelector('[type=submit]').innerHTML='Continuar por WhatsApp <span>↗</span>';document.querySelector('#contact-note').textContent='Revisa tu solicitud en WhatsApp antes de enviarla. El formulario no almacena tus datos.';}
form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const message=`Hola, Origen. Quiero cotizar mi proyecto.\n\nNombre: ${data.get('nombre').trim()}\nUbicación: ${data.get('ciudad').trim()}\nServicio: ${data.get('servicio')}\nIdea: ${data.get('idea').trim()}`;document.querySelector('#request-text').value=message;document.querySelector('#request-result').hidden=false;document.querySelector('#copy-status').textContent='';if(CONTACT.whatsapp)window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');else document.querySelector('#request-result').scrollIntoView({behavior:'smooth',block:'nearest'});});
document.querySelector('#copy-request').addEventListener('click',async()=>{const field=document.querySelector('#request-text');try{await navigator.clipboard.writeText(field.value);document.querySelector('#copy-status').textContent='Solicitud copiada. Puedes pegarla en tu conversación con Origen.';}catch{field.focus();field.select();document.querySelector('#copy-status').textContent='Selecciona y copia este texto para compartirlo.';}});
document.querySelector('#year').textContent=new Date().getFullYear();
