##Usage

```

$actionSheet.present({
                    title: '标题',
                    enableBackdropDismiss: true,
                    cssClass: 'a   b',
                    buttons: [
                                 {
                                     text: 'Delete',
                                     role: 'destructive',
                                     icon: is_md ? 'ion-trash-b' : null,
                                     handler: () => {
                                         console.log('Delete clicked');
                                     }
                                 },
                                 {
                                     text: 'Share',
                                     icon: is_md ? 'ion-android-share' : null,
                                     handler: () => {
                                         console.log('Share clicked');
                                     }
                                 },
                                 {
                                     text: 'Play',
                                     icon: is_md ? 'ion-android-arrow-dropright-circle' : null,
                                     handler: () => {
                                         console.log('Play clicked');
                                     }
                                 },
                                 {
                                     text: 'Favorite',
                                     icon: is_md ? 'ion-android-heart-outline' : null,
                                     handler: () => {
                                         console.log('Favorite clicked');
                                     }
                                 },
                                 {
                                     text: 'Cancel',
                                     role: 'cancel', // will always sort to be on the bottom
                                     icon: is_md ? 'ion-android-close' : null,
                                     handler: () => {
                                         console.log('Cancel clicked');
                                     }
                                 }
                             ]
                }).then((res) => {
                                      console.log('button clicked: ', res)
                                  });

```

## Instance Members


```
$actionSheet.present(opts)
```
Open an action sheet with a title, subTitle, and an array of buttons

Param | Type | Details
------|------|------
opts | ActionSheetOptions | Action sheet options


## Advanced

ActionSheet create options

Option | Type | Description
---------- |--------------|------
title | string | The title for the Action Sheet.
cssClass | string | Additional classes for custom styles, separated by spaces.
enableBackdropDismiss | boolean | If the Action Sheet should close when the user taps the backdrop.
buttons | array<any> | An array of buttons to display.



ActionSheet button options

Option | Type | Description
---------- |--------------|------
text | string | The buttons text.
icon | icon | The buttons icons.
handler | any | An express the button should evaluate.
cssClass | string | Additional classes for custom styles, separated by spaces.
role | string | How the button should be displayed, destructive or cancel. If not role is provided, it will display the button without any additional styles.