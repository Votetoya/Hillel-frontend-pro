/*
const info = {
	formatted_address : "Washington Square, New York, NY 10012, Сполучені Штати Америки",
	geometry: {
	   location: {
		  lat: 40.7308838,
		  lng: -73.997332
	   },
	   viewport: {
		  northeast: {
			 lat: 40.7333674,
			 lng: -73.99379435000002
		  },
		  southwest: {
			 lat: 40.72847220000001,
			 lng: -74.00132615
		  }
	   }
	},
	name: "Washington Square Park"
  };

  const copyInfo = getCopyObj(info);

  function getCopyObj(info) {
	const newCopyInfo = {};
	for (let key in info) {
	   if (typeof info[key] === 'object') {
	   } else {
	   }
	}
	return newCopyInfo;
  }
  
  console.log(copyInfo);
  console.log(info);
*/




const wizards = [
    {
        name: 'Harry Potter',
        house: 'Gryfindor'
    },
    {
        name: 'Cedric Diggory',
        house: 'Hufflepuff'
    },
    {
        name: 'Tonks',
        house: 'Hufflepuff'
    },
    {
        name: 'Ronald Weasley',
        house: 'Gryfindor'
    },
    {
        name: 'Hermione Granger',
        house: 'Gryfindor'
    }];

	const hufflepuff = wizards.reduce(function (newArr, wizard) {
		if (wizard.house === 'Hufflepuff') {
			newArr.push(wizard.name);
		}
		return newArr;
	}, []);
	
	console.log(hufflepuff);
	document.write(hufflepuff[0] + '<br>', hufflepuff[1]);
	