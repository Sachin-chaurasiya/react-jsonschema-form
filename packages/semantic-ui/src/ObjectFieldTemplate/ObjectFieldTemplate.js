/* eslint-disable react/prop-types */
import React from "react";
import { Grid } from "semantic-ui-react";
import { canExpand, getUiOptions } from '@rjsf/utils';
import AddButton from '../AddButton/AddButton';

function ObjectFieldTemplate({
  DescriptionField,
  description,
  TitleField,
  onAddClick,
  title,
  properties,
  disabled,
  readOnly,
  required,
  uiSchema,
  schema,
  formData,
  idSchema,
}) {
  const uiOptions = getUiOptions(uiSchema);
  const fieldTitle = uiOptions.title || title;
  const fieldDescription = uiOptions.description || description;
  return (
    <React.Fragment>
      {(fieldTitle) && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={fieldTitle}
          options={uiOptions.options}
          required={required}
        />
      )}
      {(fieldDescription) && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={fieldDescription}
        />
      )}
      {properties.map(prop => prop.content)}
      {canExpand(schema, uiSchema, formData) && (
        <Grid.Column width={16} verticalAlign="middle">
          <Grid.Row>
            <div
              style={{
                marginTop: "1rem",
                position: "relative",
                textAlign: "right",
              }}>
              <AddButton onClick={onAddClick(schema)} disabled={disabled || readOnly} />
            </div>
          </Grid.Row>
        </Grid.Column>
      )}
    </React.Fragment>
  );
}

export default ObjectFieldTemplate;
