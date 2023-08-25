export interface CreatePolicyResponse {
  returnedUrl: string;
}

export interface GetPolicyResponse {
  [id: string]: {
    linkedTo: string;
    data: string;
    scan: number;
    print: number;
    prize: string;
    minus: string;
    scan_url: string;
  };
}
