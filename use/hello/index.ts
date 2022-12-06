const root = document.getElementById('root') as HTMLInputElement;

function greeter(person: string): string {
  return 'Hello, ' + person;
}

const user = 'Jan2 user';
root.textContent = greeter(user);
