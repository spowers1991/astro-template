export interface CrewMember {
  _key: string;
  department?: string;
  person: {
    _ref?: string;        
    name?: string;      
    image?: {
      asset?: {
        url?: string;
      };
    };
  };
}
