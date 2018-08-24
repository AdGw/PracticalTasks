#include <iostream>
#include <stdlib.h>
#include <ctime>

using namespace std;

int main(){
  int num, guess;
  bool isGuessed;
  srand(time(0));
  num = rand() % 100;
  isGuessed = false;

  while(!isGuessed){
    cout << "Enter number between 1 and 100" << endl;
    cin >> guess;
    if(num == guess){
      cout << "Perfect! you know the number!";
      isGuessed = true;
    }else if(guess > num){
      cout << "Try again, you number is too big" << endl;
    }else{
      cout << "Try again, you number is too low" << endl;
    }
  }
}
