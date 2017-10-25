declare module "rxjs-stream" {
  declare module.exports: {
    rxToStream: (rxjs: rxjs$Observable<string>) => stream$Readable;
    streamToStringRx: (stream: stream$Readable) => rxjs$Observable<string>;
  };
}
