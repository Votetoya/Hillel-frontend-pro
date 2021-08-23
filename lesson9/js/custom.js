const obj = {
    prop: '42',
    prop2: [8, 9, 10, {
      beautifulPropertyName: 88,
      'property with spaces': {
        a: {
          b: '',
          c: {
            someProperty: [{
              'prop name': 'I am a smart programmer',
            }],
          },
        },
      },
    }],
    prop3: function() {
      return {
        baz: 'Hello',
        bar: {
          anotherBeautifulProp: [8, {
            target: 'It was simple!',
          }],
        },
      };
    }
  };

console.log('target --->', obj.prop3(Function).bar.anotherBeautifulProp[1].target);

console.log('prop name --->', obj.prop2[3]['property with spaces'].a.c.someProperty[0]['prop name']);