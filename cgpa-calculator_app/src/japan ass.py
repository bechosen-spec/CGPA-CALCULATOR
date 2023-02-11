def main():
    n = int(input().strip())
    solve(n)

def solve(n):
    if n == 0:
        return

    x = int(input().strip())
    arr = list(map(int, input().strip().split()))
    res = sum([i**2 for i in arr if i >= 0])
    print(res)

    solve(n-1)

if __name__ == "__main__":
    main()
