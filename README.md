# adapt AI Worker

#### Send text prompt to the Worker

```http
  GET /api/v9/prompt
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `?qst=` | `URL Param` | **Required**. User prompt for the AI |

#### Generate text to image

```http
  GET /api/v9/images/prompt
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `?prp=`      | `URL Param` | **Required**. Text to generate the image from |
