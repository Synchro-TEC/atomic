
```jsx
    const optionsOne = [
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
           options={optionsOne}
           optionText="name"
           optionValue="id"
           disabled={boolean('Disabled', false)}
         />
         {/* optionText usando uma function */}
         <SelectField
           label="Name"
           optionText={d => `${d.id} - ${d.name}`}
           onChange={action('on change name')}
           options={optionsOne}
           optionValue="id"
         />
       </form>
     );
     
```     
     