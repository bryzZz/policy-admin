export interface CreatePolicyResponse {
  returnedUrl: string;
}

export interface GetPolicyResponse {
  [id: string]: {
    linkedTo: string;
    data: string;
    scan: number;
    print: number;
    price: string;
    minus: string;
    url_scan: string;
  };
}

type Block = {
  percent: number;
  negative: boolean;
  data: number;
};

export interface GetStatsResponse {
  block1: Block;
  block2: Block;
  block3: Block;
  block4: Block;
  block5: Block;
  block6: Block;
}
