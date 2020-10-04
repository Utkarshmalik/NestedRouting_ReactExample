#include<iostream>
using namespace std;


int main()
{
    int nd;
    cin>>nd;

    char sc,ec;
    cin>>sc>>ec;

    int c=ec-sc+1;

    int sd,ed;

    cin>>sd>>ed;

    int d=ed-sd+1;

   

    cout << nd*(c*c)*( (d*d*d*d)-(d*(d-1)*4)-d);

}