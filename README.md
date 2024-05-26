> # Addis Software Internship Project

## TuneIn - For you favorite songs

- TuneIn is a music platform that has the basic CRUD functionalities and more features like
  - Favorites
  - Playlists
  - User Profile Management

## Techcnologies Used

### FrontEnd

- React
- Redux & Redux Saga
- Emotion and Styled Components

### BackEnd

- For the backend I abstracted away the methods of the browser's local storage and
  make it act like a backend endpoint with http methods (GET, POST, PUT, DELETE) and also make these endpointes return promises so that when I want to connect it to a real backend the changes wouldn't be big.

- **Here is the entire backend**

```typescript
class LSClient {
  static get<T>(partialUrl: string): Promise<T[] | T> {
    const keys = partialUrl.split("/");
    return new Promise((resolve, reject) => {
      if (keys[0] !== "") reject(new Error("Invalid Url"));
      let id = null;

      if (keys.length == 3) {
        id = keys[2];
      }

      const key = keys[1];

      const response = (JSON.parse(localStorage.getItem(key)!) as T[]) || [];
      if (response === null) reject(new Error("Invalid Url"));
      if (id) {
        //@ts-ignore
        const singleResponse = response.find((res) => res.id == id);
        resolve(singleResponse!);
      } else {
        resolve(response);
      }
    });
  }

  static post<T>(partialUrl: string, data: T): Promise<T> {
    const keys = partialUrl.split("/");
    return new Promise((resolve, reject) => {
      if (keys[0] !== "" && keys.length > 2) reject(new Error("Invalid Url"));
      const key = keys[1];

      const response = JSON.parse(localStorage.getItem(key)!) as T[];
      if (response === null) {
        localStorage.setItem(key, JSON.stringify([data]));
      } else {
        localStorage.setItem(key, JSON.stringify([...response, data]));
      }

      resolve(data);
    });
  }

  static put<T>(partialUrl: string, data: T): Promise<T> {
    const keys = partialUrl.split("/");
    return new Promise((resolve, reject) => {
      if (keys[0] !== "" && keys.length <= 2) reject(new Error("Invalid Url"));
      let id = null;

      if (keys.length == 3) {
        id = keys[2];
      } else {
        reject(new Error("Invalid Url"));
      }

      const key = keys[1];

      let response = JSON.parse(localStorage.getItem(key)!) as T[];
      if (response === null) reject(new Error("Not found"));

      if (id) {
        const toBeUpdatedPlaylistIdx = response.findIndex(
          //@ts-ignore
          (res) => res.id == id
        );
        if (toBeUpdatedPlaylistIdx !== -1) {
          response[toBeUpdatedPlaylistIdx] = data;
        }
        localStorage.setItem(key, JSON.stringify(response));
        resolve(data);
      } else {
        reject(new Error("Invalid Url"));
      }
    });
  }

  static delete<T>(partialUrl: string): Promise<void> {
    const keys = partialUrl.split("/");
    return new Promise((resolve, reject) => {
      if (keys[0] !== "" && keys.length <= 2) reject(new Error("Invalid Url"));
      let id = null;

      if (keys.length == 3) {
        id = keys[2];
      } else {
        reject(new Error("Invalid Url"));
      }

      const key = keys[1];

      let response = JSON.parse(localStorage.getItem(key)!) as T[];
      if (response === null) reject(new Error("Not found"));

      if (id) {
        response = response.filter(
          //@ts-ignore
          (res) => res.id !== id
        );

        localStorage.setItem(key, JSON.stringify(response));
        resolve();
      } else {
        reject(new Error("Invalid Url"));
      }
    });
  }
}

export default LSClient;
```

- **This is an example usage of the LSClient class (The backend)**

```typescript
// trackService.ts

export const addTrack = async (track: Track): Promise<Track> => {
  return await LSClient.post("/tracks", track);
};
```
