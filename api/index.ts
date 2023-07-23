import axios, { AxiosError, AxiosResponse } from 'axios';
import LoginData from 'types/RequestDataTypes/LoginData';
import UserCreationData from 'types/RequestDataTypes/UserCreationData';
import DeckInfoRes from 'types/ResponseTypes/DeckInfoRes';
import DeckRes from 'types/ResponseTypes/DeckRes';
import DeckSpecificRes from 'types/ResponseTypes/DeckSpecificRes';
import LoginRes from 'types/ResponseTypes/LoginRes';
import UserCreationRes from 'types/ResponseTypes/UserCreationRes';
import UserRes from 'types/ResponseTypes/UserRes';


const api = (authorization: string) => {
  const instance = axios.create({
    baseURL: 'http://localhost:11236',
    headers: { Authorization: authorization },
  });


  function responseBody<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  instance.interceptors.response.use((res) => { return res; }, (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        return data;
      case 401:
        console.error("unauthorised");
        break;
      case 404:
        console.error("404 error");
        break;
      case 500:
        console.error("Server had an error");
        break;
    }
    return data;
  });

  instance.interceptors.request.use((config) => {
    if (authorization) {
      config.headers.Authorization = authorization;
    }

    return config;
  });

  return {
    user: {
      getUser: (userId: number) => instance.get<UserRes>("/user", { params: { id: userId } }).then(responseBody),
      addUser: (data: UserCreationData) => instance.post<UserCreationRes>('user', { ...data }).then(responseBody),
      login: (data: LoginData) => instance.post<LoginRes>('/user/login', { ...data }).then(responseBody),
    },
    deck: {
      getDecks: () => instance.get<DeckRes>("/deck", {}).then(responseBody),
      getDeckSpecific: (deckId?: number) => instance.get<DeckSpecificRes>("/deck", {params: { id: deckId}}).then(responseBody),
      getDeckInfo: (deckId: number) => instance.get<DeckInfoRes>("/deck/info", {params: {DeckId: deckId}}).then(responseBody),
    }
  }
}

export default api;