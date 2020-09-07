#include <iostream>
#include <math.h>

using namespace std;

int fib(int num)
{
    if (num <= 1)
    {
        return num;
    }

    else if (num == 2)
    {
        return 1;
    }

    else
    {
        return fib(num - 1) + fib(num - 2);
    }
}
int main()
{
    cout << fib(9) << endl;
}
