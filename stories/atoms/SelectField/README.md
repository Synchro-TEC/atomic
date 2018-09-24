
```js
    const options = [
       { id: 1, name: 'Option A' },
       ...
     ];
     
     const component = () => (
       <form className="sv-form">
         <SelectField
           label="Name"
           errorMessage={text('Name error:', '')}
           hintInfo={text('Hint:', 'Hint Info')}
           onChange={action('on change name')}
           options={options}
           optionText="name"
           optionValue="id"
           disabled={boolean('Disabled', false)}
         />
         {/* optionText usando uma function */}
         <SelectField
           label="Name"
           optionText={d => `${d.id} - ${d.name}`}
           onChange={action('on change name')}
           options={options}
           optionValue="id"
         />
       </form>
     );
     
```     
     