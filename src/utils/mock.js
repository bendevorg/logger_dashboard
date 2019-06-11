import MockAdapter from 'axios-mock-adapter';

export default axios => {
  const mock = new MockAdapter(axios);

  mock.onGet('/logs').reply(200, {
    msg: [
      {
        method: 'GET',
        time: '19:10',
        status: 200,
        app: 'NEAT',
        path: '/games/:id_game/leaderboard',
        responseTime: 182,
        req: {
          base: '/serasa',
          url: '/point',
          path: '/point',
          method: 'POST',
          date: '2019-06-10T23:01:26.156Z',
          headers: {
            host: 'gateway.tiimus.com',
            'x-real-ip': '189.40.72.77',
            'x-forwarded-for': '189.40.72.77',
            'x-forwarded-proto': 'http',
            connection: 'close',
            'content-length': '48',
            'content-type': 'application/json',
            accept: '*/*',
            'user-agent': 'Atalhos/784 CFNetwork/976 Darwin/18.2.0',
            'accept-language': 'pt-br',
            'accept-encoding': 'gzip, deflate'
          },
          body: {
            username: 'zxc',
            password: 'xzc'
          }
        },
        res: {
          statusCode: 200,
          date: '2019-06-10T23:01:29.263Z',
          time: 3107,
          data: {
            msg: 'You hit the point'
          }
        }
      },
      {
        method: 'GET',
        time: '19:10',
        status: 200,
        app: 'NEAT',
        path: '/games/:id_game/leaderboard',
        responseTime: 182,
        req: {
          base: '/serasa',
          url: '/point',
          path: '/point',
          method: 'POST',
          date: '2019-06-10T23:01:26.156Z',
          headers: {
            host: 'gateway.tiimus.com',
            'x-real-ip': '189.40.72.77',
            'x-forwarded-for': '189.40.72.77',
            'x-forwarded-proto': 'http',
            connection: 'close',
            'content-length': '48',
            'content-type': 'application/json',
            accept: '*/*',
            'user-agent': 'Atalhos/784 CFNetwork/976 Darwin/18.2.0',
            'accept-language': 'pt-br',
            'accept-encoding': 'gzip, deflate'
          },
          body: {
            username: 'zxc',
            password: 'xzc'
          }
        },
        res: {
          statusCode: 200,
          date: '2019-06-10T23:01:29.263Z',
          time: 3107,
          data: {
            msg: 'You hit the point'
          }
        }
      },
      {
        method: 'GET',
        time: '19:10',
        status: 200,
        app: 'NEAT',
        path: '/games/:id_game/leaderboard',
        responseTime: 182,
        req: {
          base: '/serasa',
          url: '/point',
          path: '/point',
          method: 'POST',
          date: '2019-06-10T23:01:26.156Z',
          headers: {
            host: 'gateway.tiimus.com',
            'x-real-ip': '189.40.72.77',
            'x-forwarded-for': '189.40.72.77',
            'x-forwarded-proto': 'http',
            connection: 'close',
            'content-length': '48',
            'content-type': 'application/json',
            accept: '*/*',
            'user-agent': 'Atalhos/784 CFNetwork/976 Darwin/18.2.0',
            'accept-language': 'pt-br',
            'accept-encoding': 'gzip, deflate'
          },
          body: {
            username: 'zxc',
            password: 'xzc'
          }
        },
        res: {
          statusCode: 200,
          date: '2019-06-10T23:01:29.263Z',
          time: 3107,
          data: {
            msg: 'You hit the point'
          }
        }
      },
      {
        method: 'GET',
        time: '19:10',
        status: 200,
        app: 'NEAT',
        path: '/games/:id_game/leaderboard',
        responseTime: 182,
        req: {
          base: '/serasa',
          url: '/point',
          path: '/point',
          method: 'POST',
          date: '2019-06-10T23:01:26.156Z',
          headers: {
            host: 'gateway.tiimus.com',
            'x-real-ip': '189.40.72.77',
            'x-forwarded-for': '189.40.72.77',
            'x-forwarded-proto': 'http',
            connection: 'close',
            'content-length': '48',
            'content-type': 'application/json',
            accept: '*/*',
            'user-agent': 'Atalhos/784 CFNetwork/976 Darwin/18.2.0',
            'accept-language': 'pt-br',
            'accept-encoding': 'gzip, deflate'
          },
          body: {
            username: 'zxc',
            password: 'xzc'
          }
        },
        res: {
          statusCode: 200,
          date: '2019-06-10T23:01:29.263Z',
          time: 3107,
          data: {
            msg: 'You hit the point'
          }
        }
      },
      {
        method: 'GET',
        time: '19:10',
        status: 200,
        app: 'NEAT',
        path: '/games/:id_game/leaderboard',
        responseTime: 182,
        req: {
          base: '/serasa',
          url: '/point',
          path: '/point',
          method: 'POST',
          date: '2019-06-10T23:01:26.156Z',
          headers: {
            host: 'gateway.tiimus.com',
            'x-real-ip': '189.40.72.77',
            'x-forwarded-for': '189.40.72.77',
            'x-forwarded-proto': 'http',
            connection: 'close',
            'content-length': '48',
            'content-type': 'application/json',
            accept: '*/*',
            'user-agent': 'Atalhos/784 CFNetwork/976 Darwin/18.2.0',
            'accept-language': 'pt-br',
            'accept-encoding': 'gzip, deflate'
          },
          body: {
            username: 'zxc',
            password: 'xzc'
          }
        },
        res: {
          statusCode: 200,
          date: '2019-06-10T23:01:29.263Z',
          time: 3107,
          data: {
            msg: 'You hit the point'
          }
        }
      },
    ]
  });
};
