## Usage

## Instance Members

```
 $dialog.alert(opts)
 
 $dialog.confirm(opts)
 
 $dialog.prompt(opts)
 
 $dialog.radio(opts)
 
 $dialog.checkbox(opts)
```

Options blew to show a dialog with radio inputs：

```
$dialog.radio({
    title: 'Login',
    inputs: [
        {
            label: 'title',
            value: 'valjue1'
        },
        {
            label: 'title1',
            value: 'Title'
        },
        {
            label: 'title33',
            value: 'valjue133',
            checked: 'false'
        },
        {
            label: 'title133',
            value: 'Title333'
        },
    ],
    buttons: [
        {
            text: 'Cancel',
            handler: data => {
                console.log('Cancel clicked');
            }
        },
        {
            text: 'Save',
            handler: data => {
                console.log('Saved clicked', data);
            }
        }
    ]
}).then((data) => {
    console.log('alert hide.', data)
})

```

Display an alert with a title, inputs, and buttons

Param | Type | Details
------|------|------
opts | AlertOptions | Alert. See the table below


##Advanced

####Alert options

Property | Type | Description
------|------|------
title | string | The title for the alert.
message | string | The message for the alert.
cssClass | string | Additional classes for custom styles, separated by spaces.
inputs | array | An array of inputs for the alert. See input options.
buttons | array | An array of buttons for the alert. See buttons options.
enableBackdropDismiss | boolean | Whether the alert should be dismissed by tapping the backdrop. Default true.


####Input options

Property | Type | Description
------|------|------
name | string | The name for the input.
placeholder | string | The input's placeholder (for textual/numeric inputs)
value | string | The input's value.
label | string | The input's label (only for radio/checkbox inputs)
checked | boolean | Whether or not the input is checked.


####Button options

Property | Type | Description
------|------|------
text | string | The buttons displayed text.
handler | any | Emitted when the button is pressed.
cssClass | string | An additional CSS class for the button.
role | string | The buttons role, null or cancel.