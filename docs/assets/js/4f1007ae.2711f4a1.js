"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||o;return n?i.createElement(h,r(r({ref:t},m),{},{components:n})):i.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={},r="Custom Widgets and Fields",l={unversionedId:"advanced-customization/custom-widgets-fields",id:"advanced-customization/custom-widgets-fields",title:"Custom Widgets and Fields",description:"The API allows to specify your own custom widget and field components:",source:"@site/docs/advanced-customization/custom-widgets-fields.md",sourceDirName:"advanced-customization",slug:"/advanced-customization/custom-widgets-fields",permalink:"/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/advanced-customization/custom-widgets-fields.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Advanced Customization",permalink:"/react-jsonschema-form/docs/advanced-customization"},next:{title:"Custom Templates",permalink:"/react-jsonschema-form/docs/advanced-customization/custom-templates"}},s={},d=[{value:"Customizing the default fields and widgets",id:"customizing-the-default-fields-and-widgets",level:2},{value:"Adding your own custom widgets",id:"adding-your-own-custom-widgets",level:2},{value:"Custom component registration",id:"custom-component-registration",level:3},{value:"Custom widget options",id:"custom-widget-options",level:3},{value:"Customizing widgets&#39; text input",id:"customizing-widgets-text-input",level:3},{value:"Custom field components",id:"custom-field-components",level:2},{value:"Field props",id:"field-props",level:3},{value:"The <code>registry</code> object",id:"the-registry-object",level:2},{value:"Custom SchemaField",id:"custom-schemafield",level:3},{value:"Custom ArraySchemaField",id:"custom-arrayschemafield",level:3}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-widgets-and-fields"},"Custom Widgets and Fields"),(0,a.kt)("p",null,"The API allows to specify your own custom ",(0,a.kt)("em",{parentName:"p"},"widget")," and ",(0,a.kt)("em",{parentName:"p"},"field")," components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("em",{parentName:"li"},"widget")," represents a HTML tag for the user to enter data, eg. ",(0,a.kt)("inlineCode",{parentName:"li"},"input"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"select"),", etc."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("em",{parentName:"li"},"field")," usually wraps one or more widgets and most often handles internal field state; think of a field as a form row, including the labels.")),(0,a.kt)("h2",{id:"customizing-the-default-fields-and-widgets"},"Customizing the default fields and widgets"),(0,a.kt)("p",null,"You can override any default field and widget, including the internal widgets like the ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckboxWidget")," that ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectField")," renders for boolean values. You can override any field and widget just by providing the customized fields/widgets in the ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets")," props:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema, WidgetProps, RegistryWidgetsType } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'boolean',\n  default: true,\n};\n\nconst uiSchema: UiSchema = {\n  'ui:widget': 'checkbox',\n};\n\nconst CustomCheckbox = function (props: WidgetProps) {\n  return (\n    <button id='custom' className={props.value ? 'checked' : 'unchecked'} onClick={() => props.onChange(!props.value)}>\n      {String(props.value)}\n    </button>\n  );\n};\n\nconst widgets: RegistryWidgetsType = {\n  CheckboxWidget: CustomCheckbox,\n};\n\nrender(\n  <Form schema={schema} uiSchema={uiSchema} validator={validator} widgets={widgets} />,\n  document.getElementById('app')\n);\n")),(0,a.kt)("p",null,"This allows you to create a reusable customized form class with your custom fields and widgets:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RegistryFieldsType, RegistryWidgetsType } from '@rjsf/utils';\nimport { FormProps } from '@rjsf/core';\n\nconst customFields: RegistryFieldsType = { StringField: CustomString };\nconst customWidgets: RegistryWidgetsType = { CheckboxWidget: CustomCheckbox };\n\nfunction MyForm(props: FormProps) {\n  return <Form fields={customFields} widgets={customWidgets} {...props} />;\n}\n")),(0,a.kt)("p",null,"The default fields you can override are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ArrayField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ArraySchemaField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BooleanField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DescriptionField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OneOfField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AnyOfField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NullField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NumberField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ObjectField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SchemaField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"StringField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TitleField")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UnsupportedField"))),(0,a.kt)("p",null,"The default widgets you can override are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AltDateTimeWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AltDateWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CheckboxesWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CheckboxWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColorWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DateTimeWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DateWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EmailWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FileWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HiddenWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PasswordWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RadioWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RangeWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SelectWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TextareaWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TextWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TimeWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UpDownWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URLWidget"))),(0,a.kt)("h2",{id:"adding-your-own-custom-widgets"},"Adding your own custom widgets"),(0,a.kt)("p",null,"You can provide your own custom widgets to a uiSchema for the following json data types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"integer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"array"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema, WidgetProps } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: Schema = {\n  type: 'string',\n};\n\nconst uiSchema: UiSchema = {\n  'ui:widget': (props: WidgetProps) => {\n    return (\n      <input\n        type='text'\n        className='custom'\n        value={props.value}\n        required={props.required}\n        onChange={(event) => props.onChange(event.target.value)}\n      />\n    );\n  },\n};\n\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("p",null,"The following props are passed to custom widget components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),": The generated id for this widget, used to provide unique ",(0,a.kt)("inlineCode",{parentName:"li"},"name"),"s and ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"s for the HTML field elements rendered by widgets;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": The unique name of the field, usually derived from the name of the property in the JSONSchema; Provided in support of custom widgets;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schema"),": The JSONSchema subschema object for this widget;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uiSchema"),": The uiSchema for this widget;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": The current value for this widget;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"placeholder"),": The placeholder for the widget, if any;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"required"),": The required status of this widget;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disabled"),": A boolean value stating if the widget is disabled;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readonly"),": A boolean value stating if the widget is read-only;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"autofocus"),": A boolean value stating if the widget should autofocus;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"label"),": The computed label for this widget, as a string"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"multiple"),": A boolean value stating if the widget can accept multiple values;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onChange"),": The value change event handler; call it with the new value every time it changes;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onKeyChange"),": The key change event handler (only called for fields with ",(0,a.kt)("inlineCode",{parentName:"li"},"additionalProperties"),"); pass the new value every time it changes;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onBlur"),": The input blur event handler; call it with the widget id and value;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onFocus"),": The input focus event handler; call it with the widget id and value;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": A map of options passed as a prop to the component (see ",(0,a.kt)("a",{parentName:"li",href:"#custom-widget-options"},"Custom widget options"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options.enumOptions"),": For enum fields, this property contains the list of options for the enum as an array of { label, value } objects. If the enum is defined using the oneOf/anyOf syntax, the entire schema object for each option is appended onto the { schema, label, value } object."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"formContext"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"formContext")," object that you passed to ",(0,a.kt)("inlineCode",{parentName:"li"},"Form"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rawErrors"),": An array of strings listing all generated error messages from encountered errors for this widget."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"registry"),": A ",(0,a.kt)("a",{parentName:"li",href:"#the-registry-object"},"registry")," object (read next).")),(0,a.kt)("h3",{id:"custom-component-registration"},"Custom component registration"),(0,a.kt)("p",null,"Alternatively, you can register them all at once by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Form")," component, and reference their identifier from the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema, WidgetProps, RegistryWidgetsType } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst MyCustomWidget = (props: WidgetProps) => {\n  return (\n    <input\n      type='text'\n      className='custom'\n      value={props.value}\n      required={props.required}\n      onChange={(event) => props.onChange(event.target.value)}\n    />\n  );\n};\n\nconst widgets: RegistryWidgetsType = {\n  myCustomWidget: MyCustomWidget,\n};\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\n\nconst uiSchema: UiSchema = {\n  'ui:widget': 'myCustomWidget',\n};\n\nrender(\n  <Form schema={schema} uiSchema={uiSchema} validator={validator} widgets={widgets} />,\n  document.getElementById('app')\n);\n")),(0,a.kt)("p",null,"This is useful if you expose the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiSchema")," as pure JSON, which can't carry functions."),(0,a.kt)("h3",{id:"custom-widget-options"},"Custom widget options"),(0,a.kt)("p",null,"If you need to pass options to your custom widget, you can add a ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:options")," object containing those properties. If the widget has ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultProps"),", the options will be merged with the (optional) options object from ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultProps"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema, WidgetProps } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\n\nfunction MyCustomWidget(props: WidgetProps) {\n  const { options } = props;\n  const { color, backgroundColor } = options;\n  return <input style={{ color, backgroundColor }} />;\n}\n\nMyCustomWidget.defaultProps = {\n  options: {\n    color: 'red',\n  },\n};\n\nconst uiSchema: UiSchema = {\n  'ui:widget': MyCustomWidget,\n  'ui:options': {\n    backgroundColor: 'yellow',\n  },\n};\n\n// renders red on yellow input\nrender(<Form schema={schema} uiSchema={uiSchema} validator={validator} />, document.getElementById('app'));\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This also applies to ",(0,a.kt)("a",{parentName:"p",href:"#custom-component-registration"},"registered custom components"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Since v0.41.0, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:widget")," object API, where a widget and options were specified with ",(0,a.kt)("inlineCode",{parentName:"p"},'"ui:widget": {component, options}')," shape, is deprecated. It will be removed in a future release.")),(0,a.kt)("h3",{id:"customizing-widgets-text-input"},"Customizing widgets' text input"),(0,a.kt)("p",null,"All the widgets that render a text input use the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseInputTemplate")," component internally. If you need to customize all text inputs without customizing all widgets individually, you can provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseInputTemplate")," component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"templates")," property of ",(0,a.kt)("inlineCode",{parentName:"p"},"Form")," (see ",(0,a.kt)("a",{parentName:"p",href:"advanced-customization/custom-templates#baseinputtemplate"},"Custom Templates"),")."),(0,a.kt)("h2",{id:"custom-field-components"},"Custom field components"),(0,a.kt)("p",null,"You can provide your own field components to a uiSchema for basically any json schema data type, by specifying a ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:field")," property."),(0,a.kt)("p",null,"For example, let's create and register a dumb ",(0,a.kt)("inlineCode",{parentName:"p"},"geo")," component handling a ",(0,a.kt)("em",{parentName:"p"},"latitude")," and a ",(0,a.kt)("em",{parentName:"p"},"longitude"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema, FieldProps, RegistryFieldsType } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst schema: RJSFSchema = {\n  type: 'object',\n  required: ['lat', 'lon'],\n  properties: {\n    lat: { type: 'number' },\n    lon: { type: 'number' },\n  },\n};\n\n// Define a custom component for handling the root position object\nclass GeoPosition extends React.Component<FieldProps> {\n  constructor(props: FieldProps) {\n    super(props);\n    this.state = { ...props.formData };\n  }\n\n  onChange(name) {\n    return (event) => {\n      this.setState(\n        {\n          [name]: parseFloat(event.target.value),\n        },\n        () => this.props.onChange(this.state)\n      );\n    };\n  }\n\n  render() {\n    const { lat, lon } = this.state;\n    return (\n      <div>\n        <input type='number' value={lat} onChange={this.onChange('lat')} />\n        <input type='number' value={lon} onChange={this.onChange('lon')} />\n      </div>\n    );\n  }\n}\n\n// Define the custom field component to use for the root object\nconst uiSchema: UiSchema = { 'ui:field': 'geo' };\n\n// Define the custom field components to register; here our \"geo\"\n// custom field component\nconst fields: RegistryFieldsType = { geo: GeoPosition };\n\n// Render the form with all the properties we just defined passed\n// as props\nrender(\n  <Form schema={schema} uiSchema={uiSchema} validator={validator} fields={fields} />,\n  document.getElementById('app')\n);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Registered fields can be reused across the entire schema.")),(0,a.kt)("h3",{id:"field-props"},"Field props"),(0,a.kt)("p",null,"A field component will always be passed the following props:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schema"),": The JSON subschema object for this field;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uiSchema"),": The ",(0,a.kt)("a",{parentName:"li",href:"#the-uischema-object"},"uiSchema")," for this field;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idSchema"),": The tree of unique ids for every child field;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"formData"),": The data for this field;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"errorSchema"),": The tree of errors for this field and its children;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"registry"),": A ",(0,a.kt)("a",{parentName:"li",href:"#the-registry-object"},"registry")," object (read next)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"formContext"),": A ",(0,a.kt)("a",{parentName:"li",href:"#the-formcontext-object"},"formContext")," object (read next)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"required"),": The required status of this field;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disabled"),": A boolean value stating if the field is disabled;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readonly"),": A boolean value stating if the field is read-only;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"autofocus"),": A boolean value stating if the field should autofocus;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": The unique name of the field, usually derived from the name of the property in the JSONSchema"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idPrefix"),": To avoid collisions with existing ids in the DOM, it is possible to change the prefix used for ids; Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"root")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idSeparator"),": To avoid using a path separator that is present in field names, it is possible to change the separator used for ids (Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"_"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rawErrors"),": `An array of strings listing all generated error messages from encountered errors for this field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onChange"),": The field change event handler; called with the updated form data and an optional ",(0,a.kt)("inlineCode",{parentName:"li"},"ErrorSchema")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onBlur"),": The input blur event handler; call it with the field id and value;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onFocus"),": The input focus event handler; call it with the field id and value;")),(0,a.kt)("h2",{id:"the-registry-object"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"registry")," object"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"registry")," is an object containing the registered core, theme and custom fields and widgets as well as the root schema, form context, schema utils."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fields"),": The set of all fields used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"Form"),". Includes fields from ",(0,a.kt)("inlineCode",{parentName:"li"},"core"),", theme-specific fields and any ",(0,a.kt)("a",{parentName:"li",href:"#custom-field-components"},"custom registered fields"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"widgets"),": The set of all widgets used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"Form"),". Includes widgets from ",(0,a.kt)("inlineCode",{parentName:"li"},"core"),", theme-specific widgets and any ",(0,a.kt)("a",{parentName:"li",href:"#custom-widget-components"},"custom registered widgets"),", if any;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rootSchema"),": The root schema, as passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Form"),", which can contain referenced ",(0,a.kt)("a",{parentName:"li",href:"#schema-definitions-and-references"},"definitions"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"formContext"),": The ",(0,a.kt)("a",{parentName:"li",href:"#the-formcontext-object"},"formContext")," that was passed to ",(0,a.kt)("inlineCode",{parentName:"li"},"Form"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaUtils"),": The current implementation of the ",(0,a.kt)("inlineCode",{parentName:"li"},"SchemaUtilsType")," (from ",(0,a.kt)("inlineCode",{parentName:"li"},"@rjsf/utils"),") in use by the ",(0,a.kt)("inlineCode",{parentName:"li"},"Form"),". Used to call any of the validation-schema-based utility functions.")),(0,a.kt)("p",null,"The registry is passed down the component tree, so you can access it from your custom field, custom widget, custom template and ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaField")," components."),(0,a.kt)("h3",{id:"custom-schemafield"},"Custom SchemaField"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning:")," This is a powerful feature as you can override the whole form behavior and easily mess it up. Handle with care."),(0,a.kt)("p",null,"You can provide your own implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaField")," base React component for rendering any JSONSchema field type, including objects and arrays. This is useful when you want to augment a given field type with supplementary powers."),(0,a.kt)("p",null,"To proceed so, pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")," object having a ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaField")," property to your ",(0,a.kt)("inlineCode",{parentName:"p"},"Form")," component; here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, FieldProps, RegistryFieldsType } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst CustomSchemaField = function (props: FieldProps) {\n  return (\n    <div id='custom'>\n      <p>Yeah, I'm pretty dumb.</p>\n      <div>My props are: {JSON.stringify(props)}</div>\n    </div>\n  );\n};\n\nconst fields: RegistryFieldsType = {\n  SchemaField: CustomSchemaField,\n};\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\n\nrender(<Form schema={schema} validator={validator} fields={fields} />, document.getElementById('app'));\n")),(0,a.kt)("p",null,"If you're curious how this could ever be useful, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kinto/formbuilder"},"Kinto formbuilder")," repository to see how it's used to provide editing capabilities to any form field."),(0,a.kt)("p",null,"Props passed to a custom SchemaField are the same as ",(0,a.kt)("a",{parentName:"p",href:"#field-props"},"the ones passed to a custom field"),"."),(0,a.kt)("h3",{id:"custom-arrayschemafield"},"Custom ArraySchemaField"),(0,a.kt)("p",null,"Everything that was mentioned above for a ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom SchemaField")," applies, but this is only used to render the Array item ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," that are then passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrayFieldItemTemplate"),".\nBy default, ",(0,a.kt)("inlineCode",{parentName:"p"},"ArraySchemaField")," is not actually implemented in the ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")," list since ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrayField")," falls back to ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaField")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"ArraySchemaField")," is not provided.\nIf you want to customize how the individual items for an array are rendered, provide your implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"ArraySchemaField")," as a ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")," override."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { RJSFSchema, UiSchema, FieldProps, RegistryFieldsType } from '@rjsf/utils';\nimport validator from '@rjsf/validator-ajv8';\n\nconst CustomArraySchemaField = function (props: FieldProps) {\n  const { index, registry } = props;\n  const { SchemaField } = registry.fields;\n  const name = `Index ${index}`;\n  return <SchemaField {...props} name={name} />;\n};\n\nconst fields: RegistryFieldsType = {\n  ArraySchemaField: CustomArraySchemaField,\n};\n\nconst schema: RJSFSchema = {\n  type: 'string',\n};\n\nrender(<Form schema={schema} validator={validator} fields={fields} />, document.getElementById('app'));\n")))}p.isMDXComponent=!0}}]);