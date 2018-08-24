#include <iostream>

using namespace std;
double larger(double x, double y);
double compareThree(double x, double y, double z);

int main(){
  double one, two;
  cout << "The larger of number 10 and 20 is: " << larger(10,20) << endl;
  cout << "Enter two numbers";
  cin >> one >> two;

  cout << endl;
  cout << "The large of " << one << " and " << two << " is " << larger(one, two);
  cout << endl;

  
  cout << "The largest of 10, 30 and 20 is: " << compareThree(10, 30, 20);
  cout << endl;
  return 0;
}

double larger(double x , double y){
  double max;
  if(x>y){
    max = x;
  }else{
    max = y;
  }
  return max;
}

double compareThree(double x, double y, double z){
  return larger(x, larger(y,z));
}