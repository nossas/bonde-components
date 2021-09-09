import React from "react";
import {
  Box,
  Button,
  Image,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack
} from "@chakra-ui/react";
import ReactS3Uploader from "react-s3-uploader";
import { EditIcon } from "../../";

// autofocus: false
// disabled: false
// errorSchema: {}
// formContext: {}
// formData: undefined
// idPrefix: undefined
// idSchema: {$id: "root_image"}
// name: "image"
// onBlur: ƒ ()
// onChange: ƒ (value, errorSchema)
// onDropPropertyClick: ƒ (key)
// onFocus: ƒ ()
// onKeyChange: ƒ (value, errorSchema)
// rawErrors: undefined
// readonly: false
// registry: {fields: {…}, widgets: {…}, ArrayFieldTemplate: undefined, ObjectFieldTemplate: ƒ, FieldTemplate: ƒ, …}
// required: false
// schema: {type: "string", title: "Logo da comunidade"}
// uiSchema: {ui:field: "s3", classNames: undefined}
// process.env.REACT_APP_UPLOADS_URL

type S3UploadFileFieldProps = {
  signingUrl: string;
  onChange: any;
  disabled?: boolean;
}

const S3UploadFileField: React.FC<S3UploadFileFieldProps> = ({
  children,
  onChange,
  disabled,
  signingUrl
}) => {
  const inputRef: any = React.useRef(null);
  // Override callbacks
  const onProgress = (args: any) => {
    console.log('onProgress', { args });
  }
  const onError = (args: any) => {
    console.log('onError', { args });
  }
  const onFinish = ({ signedUrl }: any) => {
    const imageUrl: string = signedUrl.substring(0, signedUrl.indexOf('?'));
    console.log('onFinish', { imageUrl });
    onChange(imageUrl);
  }
  // Button should be ReactS3Uploader active.
  const onClick = (evt: any) => {
    evt?.preventDefault();
    inputRef?.current.click();
  }

  return (
    <div className="wrapper-upload-file-button">
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
      <ReactS3Uploader
        signingUrl={signingUrl}
        accept="image/*"
        onProgress={onProgress}
        onError={onError}
        onFinish={onFinish}
        inputRef={inputRef}
        style={{ display: 'none' }}
      />
    </div>
  )
}


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const S3UploadField = (props: any) => {
  console.log("S3UploadField", { props });
  const {
    alt,
    signingUrl,
    boxSize = "85px",
    borderRadius = "50%",
    removeTextButton = "Remover",
    uploadImageIcon: UploadImageIcon
  } = props.uiSchema["ui:options"] || {}
  const { title } = props.schema || {}
  const helpText = props.uiSchema["ui:help"]
  const id = props.idSchema["$id"]

  return (
    <Stack direction="row" spacing={4}>
      <S3UploadFileField
        onChange={props.onChange}
        disabled={props.disabled}
        signingUrl={signingUrl}
      >
        {props.formData ? (
          <Box
            position="relative"
            boxSize={boxSize}
            borderRadius={borderRadius}
          >
            <Image alt={alt} src={props.formData} />
            <Box position="absolute" bottom="3px" right="0">
              <EditIcon
                color="white"
                boxSize={6}
              />
            </Box>
          </Box>
        ) : (
          <UploadImageIcon
            boxSize={boxSize}
            borderRadius={borderRadius}
          />
        )}
      </S3UploadFileField>
      <FormControl id={id}>
        <FormLabel>{title}</FormLabel>
        {helpText && (
          <FormHelperText mt={4} mb={4}>
            {helpText}
          </FormHelperText>
        )}
        {props.formData && (
          <Button
            type="button"
            variant="link"
            fontWeight="normal"
            colorScheme="gray"
            onClick={() => props.onChange(null)}
          >
            {removeTextButton}
          </Button>
        )}
      </FormControl>
    </Stack>
  );
}

export default S3UploadField;