randomNumberList = [0.800, 0.801, 0.752, 0.661, 0.169, 0.956, 0.949,
                    0.003, 0.201, 0.291, 0.615, 0.131, 0.241, 0.685, 0.116, 0.241, 0.849]

k1 = k2 = 0.2
dt = 2
tpA = 4
tpB = 3
N = 6
Tdt = 2
z = 0

for i in range(1):
    for j in range(5):
        if randomNumberList[z] < (tpA/(tpA+tpB)):
            z += 1
            if randomNumberList[z] < (k1*dt):
                tpA = tpA-1
                tpB = tpB+1

        else:
            z += 1
            if randomNumberList[z] < (k2*dt):
                tpA = tpA+1
                tpB = tpB-1
        z += 1

print("Z", z)
print("Type-A", tpA)
print("Type-B", tpB)
