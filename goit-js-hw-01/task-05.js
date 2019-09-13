const country = prompt(
  'Choose country:китай,чили,aвстралия,индия,ямайка',
).toLowerCase();

switch (country) {
  case 'китай':
    console.log('Доставка в Китай будет стоить 100 кредитов');
    break;
  case 'чили':
    console.log('Доставка в Чили будет стоить 250 кредитов');
    break;
  case 'aвстралия':
    console.log('Доставка в Австралия будет стоить 170 кредитов');
    break;
  case 'индия':
    console.log('Доставка в Индия будет стоить 80 кредитов');
    break;
  case 'ямайка':
    console.log('Доставка в Ямайка будет стоить 120 кредитов');
    break;

  default:
    alert('В вашей стране доставка не доступна');
    break;
}
