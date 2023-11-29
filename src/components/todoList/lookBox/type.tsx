export interface LookBoxProps {
    top: number;
    bottom: number;
    filterDisplay: object;
    setFilterDisplay: (v: object | null) => void;
};