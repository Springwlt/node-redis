import Express from 'express';
import Redis from 'redis';
let app = Express();
const client = Redis.createClient('6379', '127.0.0.1');

app.get('/set', (req, res) => {
    client.select('15', async (error) => {
        if(error) {
            console.log(error);
        } else {
            await client.set('13636553462', '1243', function(error, result) {
                if(error) {
                    console.log(error);
                } else {
                    client.expire('13636553462', 60 * 60 * 24); //设置redis的过期时间
                    res.send(result);
                }
            });
        }
    });
});

app.get('/get', (req,res) => {
   client.select('15', async (error) => {
       if(error) {
           console.log(error);
       } else {
          await client.get('13636553462', (error,result) => {
              if(error) {
                  console.log(error);
              } else {
                  res.send(result);
              }
          })
       }
   })
});

app.get('/hmset', (req,res) => {
    client.select('0', function(error){
        if(error) {
            console.log(error);
        } else {
            // hmset
            var info = {};
            info.baidu = 'www.baidu.com'; //{"baidu":"www.baidu.com"}
            info.sina  = 'www.sina.com';  //{"sina":"www.sina.com"}
            info.qq    = 'www.qq.com';
            client.hmset('site', info, function(error, result){
                if(error) {
                    console.log(error);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

app.get('/hmget', (req,res) => {
    client.select('0', function(error){
        if(error) {
            console.log(error);
        } else {
            client.hmget('site', 'baidu', function(error,result){
                if(error) {
                    console.log(error);
                } else {
                    res.send(result);  //["www.baidu.com"]
                }
            });
        }
    });
});

app.get('/lpush',(req,res) => {
    client.select('2', function(error){
        if(error) {
            console.log(error);
        } else {
            // lpush
            client.lpush('list', 'key_0');
            client.lpush('list', 'key_1');
        }
    });
});

app.get('/lrange',(req,res) => {
    client.select('14', function(error){
        if(error) {
            console.log(error);
        } else {
            // lrange
            client.lrange('list', '0', '-1', function(error, result){
                if(error) {
                    console.log(error);
                } else {
                    res.send(result);
                }

                // 关闭链接
                client.end();
            });
        }
    });
});
app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
});