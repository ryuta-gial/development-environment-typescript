import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import './style.css';

type resJsonType = {
  msg: string;
  data: string;
};

const button = document.getElementById('send');
if (!button) {
  throw new Error('buttonがありません！');
}
button.addEventListener('click', function() {
  const element: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('isbn')
  );
  const isbn: string = element.value;
  const json = { string: isbn };

  const options: AxiosRequestConfig = {
    url: `http://localhost:8080/api/`,
    method: 'POST',
    data: json,
  };

  if (isbn.length < 1) {
    alert('Please insert your name here');
  } else {
    axios(options)
      .then((res: AxiosResponse<resJsonType>) => {
        const { data, status } = res;
        const resultText = document.getElementById(
          'result'
        ) as HTMLInputElement;
        resultText.textContent = res.data.msg;
        const el = document.getElementById('div-02') as HTMLInputElement;
        el.remove();
      })
      .catch((e: AxiosError<{ error: string }>) => {
        // エラー処理
        console.log(e.message);
      });
  }
});
