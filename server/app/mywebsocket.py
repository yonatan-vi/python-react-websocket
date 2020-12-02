#!/usr/bin/env python

# WS server example

import asyncio
import websockets
import random
import json

async def analyze(websocket, path):
    data = await websocket.recv()
    print(f"raw {data}")
    table = json.loads(data)
    num_rows = len(table)
    num_cols = len(table[0])
    print(f"rows {num_rows}. cols {num_cols}")

    for r in range(num_rows):
        for c in range(num_cols):
            await asyncio.sleep(0.5)# Delay for 0.5 second .
            x = {
                  "row": r,
                  "col": c,
                  "val": random.randint(0, 5)
            }
            await websocket.send(json.dumps(x))
            print(f"> {json.dumps(x)}")

start_server = websockets.serve(analyze, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()