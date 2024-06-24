function DepoimentoCard() {
  return (
    <div className="max-w-[382px] space-y-4">
      <div className="flex">
        <div className="w-[60px] h-[60px] bg-[#d9d9d9] rounded-full"></div>
        <div className="pl-4">
          <h3 className="text-primary-2 text-2xl font-bold">Maria Nicolas</h3>
          <span className="font-roboto text-lg text-[#355575]">Marketolog</span>
        </div>
      </div>
      <p className="text-lg text-[#355575] font-roboto">
        &quot;Estou impressionada com a qualidade do atendimento. Minha dor nas
        costas melhorou significativamente após poucas sessões. Recomendo a
        todos!&quot;
      </p>
    </div>
  );
}

export default DepoimentoCard;