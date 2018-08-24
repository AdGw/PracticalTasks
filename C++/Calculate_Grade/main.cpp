#include <iostream>
using namespace std;

void getScore(int& score);
void printGrade(int score);

int main(){
	int courseScore;
	cout << "This program calculates grade based on score: " << endl;
	getScore(courseScore);
	printGrade(courseScore);
	return 0;
}

void getScore(int& score){
	cout << "Enter course score: ";
	cin >> score;
	cout << "The score is: " << score << endl;
}

void printGrade(int cScore){
	cout << "This course grade is: ";
	
	if(cScore >= 90){
		cout << "A" <<endl;
	}else if(cScore >= 80){
		cout << "B" << endl;
	}else if(cScore >= 70){
		cout << "C" << endl;
	}else if (cScore >= 60){
		cout << "D" << endl;
	}else{
		cout << "F" << endl;
	}
}