import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const donates = [
  { name: 'Рыцарь', price: 20, description: 'Есть уникальная зелька и кит', color: 'from-gray-600 to-gray-700' },
  { name: 'Воин', price: 50, description: 'Есть уникальная зелька и кит', color: 'from-gray-500 to-gray-600' },
  { name: 'Лучник', price: 100, description: 'Есть уникальный талисман и кит', color: 'from-green-600 to-green-700' },
  { name: 'Садник', price: 140, description: 'Есть уникальная сфера и ножницы и кит', color: 'from-green-500 to-green-600' },
  { name: 'Фермер', price: 150, description: 'Специальная мотыга и сфера и кит', color: 'from-blue-600 to-blue-700' },
  { name: 'Солдат', price: 200, description: 'Уникальная зелька и уникальный талисман и кит', color: 'from-blue-500 to-blue-600' },
  { name: 'Шахтер', price: 300, description: 'Уникальные зельки и талисманом и киркой и китом', color: 'from-purple-600 to-purple-700' },
  { name: 'Король', price: 350, description: 'Уникальная зелька и уникальный талисман и 2 короны и кит', color: 'from-yellow-500 to-yellow-600' },
  { name: 'Повелитель', price: 410, description: 'Уникальный талисман и кирка шахтера и зелька короля и кит', color: 'from-red-600 to-red-700' },
  { name: 'Бог', price: 589, description: 'Зелька короля и талисман шахтера и сфера фермера и уникальным талисманом бога и самый крутой кит', color: 'from-yellow-400 to-amber-500' }
];

const chatRules = [
  { id: '1.0', text: 'Оскорбление игроков', punishment: 'Наказание: 20 минут мута' },
  { id: '1.1', text: 'Оскорбление администрации', punishment: 'Наказание: 1 час мута' },
  { id: '1.2', text: 'Продавать донаты за деньги как за рубли так и за игровую', punishment: 'Наказание: 12 дней бана по IP' },
  { id: '1.3', text: 'Спам в чат', punishment: 'Наказание: 30 минут мута' }
];

const gameRules = [
  { id: '1.0', text: '18+ характер', punishment: 'Бан на 12 дней' },
  { id: '1.1', text: 'Читы', punishment: 'Бан 1 год (и снятие доната)' },
  { id: '1.2', text: 'Лив из проверки', punishment: 'Бан навсегда по IP + снятие доната' },
  { id: '1.3', text: 'Передача аккаунтов', punishment: 'Бан навсегда' },
  { id: '1.4', text: 'Обошел систему (создал новый аккаунт чтобы избежать бана/мута)', punishment: 'Бан навсегда по IP' },
  { id: '1.5', text: 'Помеха игровому процессу', punishment: 'Может банить только админ' },
  { id: '1.6', text: 'Говорить что ты администрация сервера и можешь понизить донат, не являясь администрацией', punishment: 'Бан на 3 дня' }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('donates');
  const { toast } = useToast();

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText('TheMiddleAgesCraft.aternos.me:58588');
      toast({
        title: 'IP скопирован!',
        description: 'Адрес сервера скопирован в буфер обмена',
      });
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = 'TheMiddleAgesCraft.aternos.me:58588';
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      toast({
        title: 'IP скопирован!',
        description: 'Адрес сервера скопирован в буфер обмена',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative bg-cover bg-center py-20 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://cdn.poehali.dev/projects/f557f7d6-5bf2-4632-bb1e-597b58294cf1/files/9cce38c9-594e-40fd-89cf-98fdede6ad33.jpg')`
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/f557f7d6-5bf2-4632-bb1e-597b58294cf1/files/9f11c1a7-fd26-453e-b2b8-ec8cb840cf8f.jpg" 
              alt="Герб сервера"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            The Middle Ages Craft
          </h1>
          <p className="text-xl text-gray-300 mb-8">Добро пожаловать в средневековый мир приключений</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg border-2 border-primary">
              <code className="text-primary font-mono text-lg">TheMiddleAgesCraft.aternos.me:58588</code>
            </div>
            <Button onClick={copyIP} size="lg" className="gap-2">
              <Icon name="Copy" size={20} />
              Копировать IP
            </Button>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-1 py-2">
            <Button
              variant={activeSection === 'donates' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('donates')}
              className="gap-2"
            >
              <Icon name="Crown" size={18} />
              Донаты
            </Button>
            <Button
              variant={activeSection === 'rules' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('rules')}
              className="gap-2"
            >
              <Icon name="ScrollText" size={18} />
              Правила
            </Button>
            <Button
              variant={activeSection === 'admin' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('admin')}
              className="gap-2"
            >
              <Icon name="Shield" size={18} />
              Администрация
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {activeSection === 'donates' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Донат-привилегии</h2>
              <p className="text-muted-foreground">Поддержи сервер и получи уникальные возможности</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {donates.map((donate) => (
                <Card 
                  key={donate.name}
                  className={`bg-gradient-to-br ${donate.color} border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{donate.name}</h3>
                      <Badge variant="secondary" className="text-lg font-bold bg-primary text-primary-foreground">
                        {donate.price}₽
                      </Badge>
                    </div>
                    <p className="text-gray-100 mb-6">{donate.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                      Купить
                    </Button>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${donate.color} group-hover:h-2 transition-all duration-300`} />
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'rules' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Правила сервера</h2>
              <p className="text-muted-foreground">Соблюдай правила и наслаждайся игрой</p>
            </div>

            <div className="space-y-8">
              <Card className="bg-card border-2 border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="MessageSquare" size={32} className="text-primary" />
                  <h3 className="text-3xl font-bold text-primary">Правила чата</h3>
                </div>
                <div className="space-y-4">
                  {chatRules.map((rule) => (
                    <div key={rule.id} className="flex gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <Badge variant="outline" className="shrink-0 h-fit">{rule.id}</Badge>
                      <div>
                        <p className="font-medium text-foreground mb-1">{rule.text}</p>
                        <p className="text-sm text-destructive">{rule.punishment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-card border-2 border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Gamepad2" size={32} className="text-primary" />
                  <h3 className="text-3xl font-bold text-primary">Игровые правила</h3>
                </div>
                <div className="space-y-4">
                  {gameRules.map((rule) => (
                    <div key={rule.id} className="flex gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <Badge variant="outline" className="shrink-0 h-fit">{rule.id}</Badge>
                      <div>
                        <p className="font-medium text-foreground mb-1">{rule.text}</p>
                        <p className="text-sm text-destructive">{rule.punishment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'admin' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Администрация</h2>
              <p className="text-muted-foreground">Команда, которая делает сервер лучше</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-yellow-600 to-amber-700 border-4 border-primary p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <Icon name="Crown" size={64} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">MrFermer</h3>
                <Badge className="text-lg bg-primary/20 text-primary border-2 border-primary">
                  Владелец
                </Badge>
              </Card>

              <Card className="bg-gradient-to-br from-red-600 to-red-700 border-4 border-primary p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <Icon name="Shield" size={64} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">DypInPvp</h3>
                <Badge className="text-lg bg-primary/20 text-primary border-2 border-primary">
                  Главный Администратор
                </Badge>
                <p className="text-gray-100 mt-4">Создатель китов</p>
              </Card>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-card border-t border-border py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 The Middle Ages Craft. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;